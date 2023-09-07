import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  products: Product[];
  nextId: number;

  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  create(createProductDto: CreateProductDto): Product {
    const product: Product = {
      id: this.nextId,
      ...createProductDto,
    };

    this.products.push(product);
    this.nextId++;

    return product;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
