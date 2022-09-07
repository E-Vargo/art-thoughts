class RemoveDateFromContributions < ActiveRecord::Migration[6.1]
  def change
    remove_column :contributions, :date, :date
  end
end
