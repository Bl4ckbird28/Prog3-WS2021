
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
    int i;
    for (i=2; i <= x/i; i = i + 1)
    {
        int factor = x/i;
        if (factor*i == x)
        {
			cout << "factor found: " << i << " * " << factor << endl;
			isPrime = false;
            break;
        }
    }

    cout << i << endl;
    
    cout << x << " is " ;
    if (isPrime)
        cout << "prime" << endl;
    else
        cout << "not prime" << endl;


    return 0;
}

