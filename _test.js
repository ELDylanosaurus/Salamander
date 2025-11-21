import { expect } from "jsr:@std/expect"
import { Board } from "./board.js"

const startBoard = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,1,2,0,0,0],
  [0,0,0,2,1,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
]

Deno.test("spielzug erlaubt fuer spieler 1", () => {
  const board = Board.of(startBoard)
  expect(board.isValidMove(1, 2, 4)).toBe(true)
})

Deno.test("feld schon besetzt durch eigenen stein", () => {
  const board = Board.of(startBoard)
  expect(board.isValidMove(1, 3, 3)).toBe(false)
})

Deno.test("reihe nicht gueltig", () => {
  const board = Board.of(startBoard)
  expect(board.isValidMove(1, -1, 3)).toBe(false)
})

Deno.test("spalte nicht gueltig", () => {
  const board = Board.of(startBoard)
  expect(board.isValidMove(1, 3, 99)).toBe(false)
})

Deno.test("kein gegner wird gedreht", () => {
  const board = Board.of(startBoard)
  expect(board.isValidMove(1, 0, 0)).toBe(false)
})

Deno.test("spielerkennung ungueltig", () => {
  const board = Board.of(startBoard)
  expect(board.isValidMove(0, 2, 3)).toBe(false)
})
