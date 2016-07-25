require 'test_helper'

class CommetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "save nothing" do
    @commet=commets(:one)
    assert @commet.save
  end
end
