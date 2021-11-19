
#include <iostream>
using std::cout;
using std::cin;
using std::endl;

int main()
{
    int x;
    cout << "Enter a number" << endl;
    cin >> x ;

    bool isPrime = true;
    int i=2;

    while(i <= x/i)
    {
        int factor = x/i;
        if (factor*i == x)
        {
            cout << "factor found: " << i << " * " << factor << endl;
            isPrime = false;
            break;
        }
        i = i + 1;
    }

    cout << x << " is " ;
    if (isPrime)
        cout << "Prime" << endl;
    else
        cout << "not Prime" << endl;

    return 0;
}

