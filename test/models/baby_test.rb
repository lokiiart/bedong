require 'test_helper'

class BabyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "save new" do
    @baby = Baby.new
    assert @baby.save
  end

  test "show baby" do
  end
end
