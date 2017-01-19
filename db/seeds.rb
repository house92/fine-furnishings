# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
["White", "Black", "Green", "Blue", "Red"].each do |colour|
  PaintColour.find_or_create_by(colour: colour)
end

["Matte", "Gloss", "Semi-gloss"].each do |kind|
  PaintType.find_or_create_by(kind: kind)
end

["Chair", "Table", "Bed", "Cupboard", "Coffee table", "Wardrobe", "Bench"].each do |piece|
  Furniture.find_or_create_by(kind: piece)
end

["Small", "Medium", "Large"].each do |size|
  Size.find_or_create_by(size: size)
end

["Pine", "Oak", "Mahogany", "Beech", "Maple"].each do |wood|
  Wood.find_or_create_by(kind: wood)
end
