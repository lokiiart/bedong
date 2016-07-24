json.array!(@students) do |student|
  json.extract! student, :id, :title, :stock, :girl
  json.url student_url(student, format: :json)
end
