require 'test_helper'

class StarTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "save new" do
    @star = Star.new
    assert @star.save
  end
end
