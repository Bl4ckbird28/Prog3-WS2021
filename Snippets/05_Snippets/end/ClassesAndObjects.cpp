
// #include "Person.hpp"
#include "User.hpp"
#include <iostream>

int main() {
    Person firstPerson("Maximilian", "Fischer", 18);
    {
        User user("Some", "Human", 30, "human@earth.com");
        std::string nameOfUser = user.getName();

        std::cout << "nameOfUser: " << nameOfUser << std::endl;
    }

    std::cout << "somewhere inside main but after scoped block" << std::endl;
    std::string name = firstPerson.getName();

    return 0;
}
