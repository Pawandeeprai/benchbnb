# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  long        :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base
  validates :description, :lat, :long, presence: true

  def self.in_bounds(bounds)
    Bench.where(lat: bounds["south"].. bounds["north"])
    .where(long: bounds["west"]..bounds["east"])
  end
end
