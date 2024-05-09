import json
user_code: list = []

#add or update
def update(user_submission: dict) -> list:
    for i in user_code:
        if user_submission['username'] == i['username']:
            print("User %s already exists. Updating..." % i['username'])
            i.update(user_submission)
            return user_code
    else: #else statement triggers if no match is found in the for loop
        user_code.append(user_submission)
        return user_code
    

def displayAll() -> list:
    return user_code

def deleteById(id: int) -> None:
    del user_code[id]

if __name__ == "__main__":
    #tests
    print(displayAll())
    d = {"username":"peter","code":"hi"}
    update(d)
    print(displayAll())
    e = {"username":"peter","code":"print('hi')"}
    update(e)
    print(displayAll())
    j = {"username":"3ak","code":"test"}
    update(j)
    print(displayAll())
    k = {"username":"3ak","code":"print('test')"}
    update(k)
    print(displayAll())
    