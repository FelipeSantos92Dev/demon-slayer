import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { addHours } from 'date-fns'

export async function GET() {
  try {
    const characters = await prisma.character.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })

    return new NextResponse(JSON.stringify(characters), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.log('[CHARACTER_GET]', error)

    return new NextResponse('Algo deu errado', { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name } = body

    if (!name) {
      return new NextResponse('Parâmetros incorretos', { status: 400 })
    }

    const character = await prisma.character.create({
      data: {
        name,
        createdAt: addHours(new Date(), -3),
        updatedAt: addHours(new Date(), -3)
      }
    })

    return new NextResponse(JSON.stringify(character), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.log('[CHARACTER_POST]', error)

    return new NextResponse('Algo deu errado', { status: 500 })
  }
}
