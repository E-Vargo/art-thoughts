class ContributionSerializer
include FastJsonapi::ObjectSerializer
attributes  :idea_id, :photo_url, :title, :date, :description, :medium
end

