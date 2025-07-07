import 'package:flutter/material.dart';
import 'portfolio_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home:PortfolioScreen(),
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark(useMaterial3: true),

    );
  }
}
