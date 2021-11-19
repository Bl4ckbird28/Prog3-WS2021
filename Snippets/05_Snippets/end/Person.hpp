#include <string>

class Person {

  private:
    std::string firstname;
    std::string lastname;
    int age;

  public:
    Person(std::string first, std::string last, int givenAge);
    Person();
    ~Person();

    std::string getName();
};