#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int main()
{
  int a, b, c, total = 0;
  cin >> a >> b >> c;
  for (int i = a; i <= b; i++)
  {
    if (c % i == 0)
    {
      total++;
    }
  }
  cout << total << endl;
}
