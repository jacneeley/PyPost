import json
user_code = []

#add or update
def update(user_submission: dict) -> list:
    if user_code:
        for i in user_code:
            if user_submission['username'] == i['username']:
                print(user_submission['username'], i['username'])
                print("user %s already exists\nupdating..." % i['username'])
                return i.update(user_submission)
            else:
                return user_code.append(user_submission)            
    else: 
        return user_code.append(user_submission)
    

def displayAll() -> list:
    return user_code

def deleteById(id: int) -> None:
    del user_code[id]

if __name__ == "__main__":
    print(displayAll())