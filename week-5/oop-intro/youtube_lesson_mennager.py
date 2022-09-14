import string

class YouTubeLessonManager:
    def __init__(self):
        self.lessons ={}
        self.URL = 'https://www.youtube.com/watch?v='

    def save(self, name, url):
        lower_case_name = self.format_name(name)
        self.lessons[lower_case_name] = {"url": url.split("=")[1], "counter":0}
    
    def get(self,lesson_name):
        lesson = self.find_item(lesson_name)
        if lesson == "lesson was not found":
            return lesson
        lesson["counter"] +=1
        return self.URL + lesson["url"]

    def find_item(self,name):
        lower_case_name = self.format_name(name)
        for k,v in self.lessons.items():
            if lower_case_name in k:
                return  v
        return "lesson was not found"

    def get_counts(self,name):
        lesson = self.find_item(name)
        if lesson == "lesson was not found":
            return lesson
        return lesson["counter"]

    def format_name(self,name):
        return name.lower().translate(str.maketrans('', '', string.punctuation+' '))



#checks
lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
#print(lesson_manager.lessons) # outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}  
#print(lesson_manager.lessons["For-Loops"]) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 
#print(lesson_manager.get("for-loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
#print(lesson_manager.get("fOr-LooPS")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# print(lesson_manager.get("for-loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 
# print(lesson_manager.get("for loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# print(lesson_manager.get("for loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# print(lesson_manager.get("for")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# print(lesson_manager.get("loops")) # outputs ['https://www.youtube.com/watch?v=OnDr4J2UXSA', 'https://www.youtube.com/watch?v=6TEGxJXLAWQ']
lesson_manager.get("For-Loops") 
lesson_manager.get("For-Loops")
lesson_manager.get("Dictionaries")
lesson_manager.get("For-Loops")
lesson_manager.get("Dictionaries") 
print(lesson_manager.get_counts('For-Loops')) # outputs: 3
print(lesson_manager.get_counts('Dictionaries')) # outputs: 2