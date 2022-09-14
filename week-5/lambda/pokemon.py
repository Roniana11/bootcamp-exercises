import json

with open("week-5\lambda\pokemon.json") as pokemon_file:
    pokemon_data = json.load(pokemon_file)

pokemon_data = list(map(lambda pokemon: {'id':pokemon["id"],
'name': pokemon["name"],
'type': pokemon["type"],
'weight': pokemon["weight"],
'height': pokemon["height"],
'weaknesses': pokemon["weaknesses"]}, pokemon_data))

pokemon_names = list(map(lambda pokemon: pokemon["name"], pokemon_data))

heavy_pokemons = list(filter(lambda pokemon: pokemon["weight"] >100 ,pokemon_data))
waterproof_pokemons = list(map(lambda p: p["name"], list(filter(lambda pokemon: "Water"  in pokemon["weaknesses"] ,pokemon_data))))
print(waterproof_pokemons)


numbers = [2, 3, 55, 4, 6, 8, 43, 10]

print(sum(map(lambda num: num*num ,(sorted(filter(lambda num: num%2 ==0,numbers), reverse=True)[:4]))))