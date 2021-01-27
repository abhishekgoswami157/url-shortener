class AddPinnedToUrls < ActiveRecord::Migration[6.0]
  def change
    add_column :urls, :pinned, :boolean, null: false, default: false
  end
end
