import 'package:flutter/material.dart';

class LangBox extends StatelessWidget {
  final IconData icon;
  final String name;
  const LangBox({
    super.key,
    required this.icon,
    required this.name,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 6,
      child: Container(
        padding: const EdgeInsets.all(8.0),
        width: 120,
        decoration: BoxDecoration(borderRadius: BorderRadius.circular(20)),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              Icon(icon, size: 30),
              SizedBox(height: 8),
              Text(name, style: TextStyle(fontSize: 15)),
            ],
          ),
        ),
      ),
    );
  }
}
