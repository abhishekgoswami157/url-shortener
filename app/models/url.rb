class Url < ApplicationRecord
  validates :original_url, presence: true, uniqueness: true
  validates :slug, presence: true, uniqueness: true, length: {is: 6}


  def set_slug
    self.slug = generate_slug
  end
  
  def generate_slug
    loop do
      slug = SecureRandom.alphanumeric(6)
      break slug unless Url.where(slug: slug).exists?
    end
  end
end


