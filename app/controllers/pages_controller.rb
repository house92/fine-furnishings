class PagesController < ApplicationController
  def home
    @kinds_of_furniture = Furniture.all.map(&:kind)
    @paint_colours = PaintColour.all.map(&:colour)
    @paint_types = PaintType.all.map(&:kind)
    @kinds_of_wood = Wood.all.map(&:kind)
    @sizes = Size.all.map(&:size)
  end
end
