#include <stdio.h>

union person
{
  char name[16];
  int age;
};

int main()
{
  union person Tanaka = {"Tanaka"};

  printf("%dバイト\n", sizeof(Tanaka));
  printf("%s\n", Tanaka.name);

  Tanaka.age = 23;
  printf("%ldバイト\n", sizeof(Tanaka));
  printf("%s\n", Tanaka.name);
}
