// import prisma from '../config/db';
// import { Produto } from '../interface/Produto';

// class ProdutoRepository {
//   async findAll() {
//     return await prisma.produto.findMany();
//   }

//   async findById(id: string) {
//     return await prisma.produto.findUnique({
//       where: { id },
//     });
//   }

//   async create(data: Produto) {
//     return await prisma.produto.create({
//       data,
//     });
//   }

//   async update(id: string, data: Partial<Produto>) {
//     return await prisma.produto.update({
//       where: { id },
//       data,
//     });
//   }

//   async delete(id: string) {
//     return await prisma.produto.delete({
//       where: { id },
//     });
//   }
// }

// export default new ProdutoRepository();
