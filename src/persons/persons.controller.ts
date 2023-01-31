import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person, Response } from './entities/person.entity';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto): Promise<Response> {
    return this.personsService.create(createPersonDto);
  }

  @Get()
  async findAll(): Promise<Person[]> {
    return this.personsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Person> {
    return this.personsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return this.personsService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Response> {
    return this.personsService.remove(+id);
  }
}
