class AddSlugToUrls < ActiveRecord::Migration[6.0]
  def change
    add_column :urls, :slug, :string, null: false, default: ""
  end
end
