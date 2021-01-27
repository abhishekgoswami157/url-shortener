class CreateUrl < ActiveRecord::Migration[6.0]
  def change
    create_table :urls do |t|
      t.string :original_url
      t.timestamps
    end
  end
end
