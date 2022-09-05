class IdeaSerializer
    include FastJsonapi::ObjectSerializer
    attributes :title, :date, :category, :thoughts
end