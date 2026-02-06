import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { PedidoService } from "./pedido.service";


@Controller('pedido')
export class PedidoController {


    @Post(':id')
    async create(){

    }

    @Get(':id')
    async listaPedidos() {

    }

    @Patch('statusp/:id')
    async updatePedidoStatus(){

    }

    @Patch('statusf/:id')
    async updatePedidoStatusFinanceiro(){

    }

    @Delete(':id')
    async cancelarPedido(){

    }

    @Post(':id/itens')
    async addItensEmPedido(){

    }

    @Delete(':id/itens/:itemId')
    async removerItem(){

    }

}