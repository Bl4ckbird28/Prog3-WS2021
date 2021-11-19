#include "Person.hpp"
#include <iostream>

// using std::cout;
// using std::endl;

using namespace std;

Person::Person(std::string first, std::string last, int givenAge) 
    : firstname(first), lastname(last), age(givenAge)
{
    cout << "constructing " << firstname << " " << lastname << endl;
}
Person::Person() : age(0)
{
    cout << "constructing " << firstname << " " << lastname << endl;
}

Person::~Person()
{
    cout << "destructing " << firstname << " " << lastname << endl;
}

string Person::getName() {
    return firstname + " " + lastname;
}
