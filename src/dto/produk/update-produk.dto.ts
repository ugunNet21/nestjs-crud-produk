import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateProdukDto {
  @IsString()
  @IsOptional()
  nama?: string;

  @IsString()
  @IsOptional()
  deskripsi?: string;

  @IsNumber()
  @IsOptional()
  harga?: number;
}