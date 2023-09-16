import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import pokemonsData from "../data/pokemons.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(pokemonsData);
});

router.get("/:pokemonId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/pokemon.html"));
});

export default router;
