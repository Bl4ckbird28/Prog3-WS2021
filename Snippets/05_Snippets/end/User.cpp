#include "User.hpp"
#include <iostream>

User::User(std::string first,
           std::string last,
           int arbitrary,
           std::string email)
    : Person(first, last, arbitrary),
      email(email) {
    std::cout << "constructing User with Email " << email << std::endl;
}

User::~User() {
    std::cout << "destructing User with Email " << email << std::endl;
}
