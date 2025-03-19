import { CreateProdukDto } from 'src/dto/produk/create-produk.dto';
import { UpdateProdukDto } from 'src/dto/produk/update-produk.dto';

import { Injectable } from '@nestjs/common';

import { Produk } from './produk.interface';

@Injectable()
export class ProdukService {
  private produk: Produk[] = []; // Definisikan tipe data array produk

  // CREATE: Tambah produk baru
  create(createProdukDto: CreateProdukDto): Produk {
    const newProduk: Produk = {
      id: Date.now().toString(), // Generate ID unik
      ...createProdukDto,
    };
    this.produk.push(newProduk);
    return newProduk;
  }

  // READ: Ambil semua produk
  findAll(): Produk[] {
    return this.produk;
  }

  // READ: Ambil satu produk berdasarkan ID
  findOne(id: string): Produk | null {
    return this.produk.find((produk) => produk.id === id) || null;
  }

  // UPDATE: Update produk berdasarkan ID
  update(id: string, updateProdukDto: UpdateProdukDto): Produk | null {
    const index = this.produk.findIndex((produk) => produk.id === id);
    if (index !== -1) {
      this.produk[index] = { ...this.produk[index], ...updateProdukDto };
      return this.produk[index];
    }
    return null;
  }

  // DELETE: Hapus produk berdasarkan ID
  remove(id: string): Produk | null {
    const index = this.produk.findIndex((produk) => produk.id === id);
    if (index !== -1) {
      const deletedProduk = this.produk[index];
      this.produk.splice(index, 1);
      return deletedProduk;
    }
    return null;
  }
}