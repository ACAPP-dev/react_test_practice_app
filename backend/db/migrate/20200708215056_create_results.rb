class CreateResults < ActiveRecord::Migration[6.0]
  def change
    create_table :results do |t|
      t.integer :user_id
      t.integer :test_id
      t.string :test_subject
      t.string :test_difficulty
      t.float :test_score
      t.timestamps
    end
  end
end
