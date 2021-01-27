class AddClickCountToUrls < ActiveRecord::Migration[6.0]
  def change
    add_column :urls, :click_count, :integer, null: false, default: 0
  end
end
