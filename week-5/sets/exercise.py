import json

nyc_data = open("C:/Users/Rent/Documents\code/bootcamp/u-code/exercises/week-5/sets/nyc_jobs.json")
nyc_jobs = json.load(nyc_data)

def find_jobs_by_word(word):
    return [job for job in nyc_jobs if word in job["job_description"]]

# print(len(find_jobs_by_word("experience"))) # 165


entry_level_jobs = set([job["agency"] for job in nyc_jobs if job["career_level"] == "Entry-Level"])
in_brodway = set([job["agency"] for job in nyc_jobs if "Broadway" in job["work_location"]])

# result = (in_brodway & entry_level_jobs )
# print("broadway", result)

hourly_jobs = set([job["salary_range_to"] for job in nyc_jobs if job["salary_frequency"] == "Hourly"])
not_entry_level = set([job["salary_range_to"] for job in nyc_jobs if job["career_level"] != "Entry-Level"])

# print (max(hourly_jobs & not_entry_level))

# higher_than_17 = set([job["agency"] for job in nyc_jobs if float(job["salary_range_from"]) >= 17 ])
# lower_than_21 = set([job["agency"] for job in nyc_jobs if float(job["salary_range_to"]) <= 18 ])

# print(higher_than_17)
# print(lower_than_21)
# print(higher_than_17 & lower_than_21)

# print(nyc_jobs ("DEPARTMENT OF BUILDINGS"))

def is_in_range(job, from_, to):
    is_above_min = float(job.get("salary_range_from")) >= from_
    is_below_max = float(job.get("salary_range_to")) <= to
    return is_above_min and is_below_max

salary_min = 17
salary_max = 18
agencies_in_range = [job["agency"] for job in nyc_jobs if is_in_range(job, salary_min, salary_max)]
print("in range", (set(agencies_in_range)))