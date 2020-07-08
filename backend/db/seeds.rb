# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: "Andrew Capp", username: "acapp", password: "1234")

user1.results.build(test_id: 544, test_subject: "Initial Data Test", test_difficulty: "medium", test_score: 95)
user1.save