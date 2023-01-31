import { HttpException, Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person, Response } from './entities/person.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonsService {
  constructor(private readonly prisma: PrismaService) {}
  private persons: Person[] = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 31,
    },
  ];

  async findAll(): Promise<Person[]> {
    return await this.prisma.person.findMany();
  }

  async create(createPersonDto: CreatePersonDto): Promise<Response> {
    await this.prisma.person.create({ data: createPersonDto });
    return {
      success: true,
      msg: 'Person successfully created',
    };
  }

  async findOne(id: number): Promise<Person> {
    const person = await this.prisma.person.findUnique({ where: { id } });
    if (!person) throw new HttpException('Person not found', 404);
    return person;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    try {
      await this.prisma.person.update({
        where: { id },
        data: updatePersonDto,
      });

      return { success: true, msg: 'Person successfully updated' };
    } catch (error) {
      throw new HttpException('Person not found', 404);
    }
  }

  async remove(id: number): Promise<Response> {
    try {
      await this.prisma.person.delete({ where: { id } });
      return {
        success: true,
        msg: 'Person successfully removed',
      };
    } catch (error) {
      throw new HttpException('Person not found', 404);
    }
  }
}
