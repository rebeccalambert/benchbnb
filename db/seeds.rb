# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


benches = Bench.create([{lat: 37.786736, lng: -122.408247, description: "Best 1 bench"}, 
  {lat: 37.787961, lng: -122.407128, description: "Best 2 bench"},
  {lat: 37.792276, lng: -122.405510, description: "Best 3 bench"},
  {lat: 37.796259, lng: -122.394591, description: "Best 4 bench"},
  {lat: 37.797675, lng: -122.399005, description: "Best 5 bench"}])
