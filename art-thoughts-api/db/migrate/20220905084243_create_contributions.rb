class CreateContributions < ActiveRecord::Migration[6.1]
  def change
    create_table :contributions do |t|
      t.integer :idea_id
      t.string :photo_url
      t.string :title
      t.date :date
      t.text :description
      t.string :medium

      t.timestamps
    end
  end
end
