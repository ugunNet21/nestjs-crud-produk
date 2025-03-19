import { CreateProdukDto } from 'src/dto/produk/create-produk.dto';
import { UpdateProdukDto } from 'src/dto/produk/update-produk.dto';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ProdukService } from './produk.service';

@Controller('produk')
export class ProdukController {
    constructor(private readonly produkService: ProdukService) {}
  
    @Post()
    create(@Body() createProdukDto: CreateProdukDto) {
      return this.produkService.create(createProdukDto);
    }
  
    @Get()
    findAll() {
      return this.produkService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.produkService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateProdukDto: UpdateProdukDto) {
      return this.produkService.update(id, updateProdukDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.produkService.remove(id);
    }
  }