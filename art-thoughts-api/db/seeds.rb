# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

idea1 = Idea.create(title: "Fishy", date: Time.new, category: "Animals", thoughts: "A traditional japanese style drawing with orange, tan, and light blue color scheme.")
idea2 = Idea.create(title: "Spookersons", date: Time.new, category: "Architecture", thoughts: "A big spooky house drawn with black ink with bold lines and sharp white contrast.")

contribution1 = Contribution.create(idea_id: idea1.id, photo_url: "https://i.pinimg.com/736x/69/74/42/697442122e854daecbefc315f32b9811.jpg", description: "could have two fish swimming around each other", medium: "ink, markers")
contribution2 = Contribution.create(idea_id: idea2.id, photo_url: "https://thegraphicsfairy.com/wp-content/uploads/2019/10/Haunted-victorian-house-graphicsfairy.jpg", description: "could use tons of cross hatching and give it a washed out look", medium: "ink, graphite?")