import { NextResponse } from 'next/server'
import { addHours } from 'date-fns'

import prisma from '@/lib/prisma'

export async function PATCH(req: Request, { params }: { params: { characterId: string } }) {
  try {
    const body = await req.json()

    const { name } = body

    if (!name) {
      return new NextResponse('Parâmetros incorretos', { status: 400 })
    }

    if (!params.characterId) {
      return new NextResponse('Id do personagem obrigatório', { status: 400 })
    }

    const characterExists = await prisma.character.findUnique({
      where: {
        id: params.characterId
      }
    })

    if (!characterExists) {
      return new NextResponse('Personagem não encontrado', { status: 404 })
    }

    const character = await prisma.character.update({
      where: {
        id: params.characterId
      },
      data: {
        name,
        updatedAt: addHours(new Date(), -3)
      }
    })

    return NextResponse.json(character)
  } catch (error) {
    console.log('[CHARACTER_PATCH]', error)
    return new NextResponse('Algo deu errado', { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { characterId: string } }) {
  try {
    if (!params.characterId) {
      return new NextResponse('Id do personagem obrigatório', { status: 400 })
    }

    const characterExists = await prisma.character.findUnique({
      where: {
        id: params.characterId
      }
    })

    if (!characterExists) {
      return new NextResponse('Personagem não encontrado', { status: 404 })
    }

    const character = await prisma.character.delete({
      where: {
        id: params.characterId
      }
    })

    return NextResponse.json(character)
  } catch (error) {
    console.log('[CHARACTER_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
