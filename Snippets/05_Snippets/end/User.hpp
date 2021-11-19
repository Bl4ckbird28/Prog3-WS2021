#pragma once

#include "Person.hpp"
#include <string>

class User : public Person {
  private:
    std::string email;

  public:
    User(std::string first,
         std::string last,
         int givenAge,
         std::string email);

    ~User();
};
