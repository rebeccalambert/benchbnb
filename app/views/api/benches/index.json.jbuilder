# json.array!(@benches) do |bench|
#   json.lat bench.lat
#   json.lng bench.lng
#   json.lat bench.lat
# json.extract! @benches, :lat, :lng, :description


  @benches.each do |bench|
    json.set! bench.id do
      json.lat bench.lat
      json.lng bench.lng
      json.description bench.description
    end
  end
