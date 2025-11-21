import { expect } from "jsr:@std/expect"
import { Board } from "./board.js"

Deno.test("auswertung ergibt remis", () => {
  const game = Board.of([
    [1,2,1,2,1,2,1,2],
    [2,1,2,1,2,1,2,1],
    [1,2,1,2,1,2,1,2],
    [2,1,2,1,2,1,2,1],
    [1,2,1,2,1,2,1,2],
    [2,1,2,1,2,1,2,1],
    [1,2,1,2,1,2,1,2],
    [2,1,2,1,2,1,2,1]
  ])
  expect(game.result().tied).toBe(true)
})

Deno.test("keine entscheidung da noch zuege", () => {
  const game = Board.of([
    [0,0,0,0,0,0,0,0],
    [0,1,2,1,2,1,2,1],
    [0,2,1,2,1,2,1,2],
    [0,1,2,1,2,1,2,1],
    [0,2,1,2,1,2,1,0],
    [0,1,2,1,2,1,2,0],
    [0,2,1,2,1,2,1,0],
    [0,0,0,0,0,0,0,0]
  ])
  expect(game.result().tied).toBe(false)
})

Deno.test("mehr steine fuer spieler 1", () => {
  const game = Board.of([
    [1,1,1,1,1,1,1,1],
    [1,1,2,2,2,2,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,2,2,1,1,1],
    [1,1,2,2,2,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,2,1,1,1,1],
    [1,1,1,1,1,1,1,1]
  ])
  expect(game.result().tied).toBe(false)
})

Deno.test("mehr steine fuer spieler 2", () => {
  const game = Board.of([
    [2,2,2,2,2,2,2,2],
    [2,2,1,1,1,1,2,2],
    [2,2,2,2,2,2,2,2],
    [2,2,2,1,1,2,2,2],
    [2,2,1,1,1,2,2,2],
    [2,2,2,2,2,2,2,2],
    [2,2,2,1,2,2,2,2],
    [2,2,2,2,2,2,2,2]
  ])
  expect(game.result().tied).toBe(false)
})
