#include <iostream>
#include <string>

using namespace std;

template <class T>
T equation(T a = 0, T b = 0);

int main()
{
  int x = 10;
  int y = 10;

  int z = equation(x, y);

  cout << z << endl;

  double xd = 1.5;
  double yd = 0.1;

  double zd = equation(xd, yd);

  cout << zd << endl;
}

template <class T>
T equation(T a, T b)
{
  return 2 * a + b;
}
