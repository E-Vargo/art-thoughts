class CreateIdeas < ActiveRecord::Migration[6.1]
  def change
    create_table :ideas do |t|
      t.string :title
      t.date :date
      t.string :category
      t.text :thoughts

      t.timestamps
    end
  end
end
