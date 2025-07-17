import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

final Map<String, dynamic> projectData = {
  "name": ['Weather app'],
  "description": [
    'A basic Flutter weather app that fetches and displays the current weather conditions for a single predefined city. Ideal as a starter project for understanding API integration and Flutter UI development.',
  ],
  "button": ['https://github.com/mauryamj/weatherapp'],
  'lang': {
    0: ['Flutter', 'Dart', 'API'],
  },
};

class ProjectBox extends StatelessWidget {
  final int i;
  final int type;

  const ProjectBox({super.key, required this.i, required this.type});

  Future<void> _launchUrl1(String urlString) async {
    final Uri url = Uri.parse(urlString);
    if (!await launchUrl(url)) {}
  }

  @override
  Widget build(BuildContext context) {
    if (type == 1) {
      return Card(
        elevation: 6,
        child: Container(
          padding: const EdgeInsets.all(8.0),
          width: 500,
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(20)),
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              children: [
                Text(
                  projectData['name'][i],
                  style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 10),

                Row(
                  children: [
                    for (int j = 0; j < projectData['lang'][i].length; j++)
                      Padding(
                        padding: const EdgeInsets.all(3.0),
                        child: SizedBox(
                          height: 30,
                          child: Container(
                            decoration: BoxDecoration(
                              border: Border.all(
                                color: Colors.white,
                                width: 1.0,
                              ),
                              borderRadius: BorderRadius.circular(10.0),
                            ),
                            padding: const EdgeInsets.all(5.0),
                            child: Text(
                              projectData['lang'][i][j],
                              style: TextStyle(fontSize: 13),
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
                SizedBox(height: 8),
                Text(
                  "${projectData['description'][i]} and",
                  style: TextStyle(fontSize: 15),
                ),
                SizedBox(height: 8),
                OutlinedButton(
                  onPressed: () {
                    _launchUrl1(projectData['button'][i]);
                  },

                  style: ButtonStyle(
                    backgroundColor: WidgetStatePropertyAll(Color(0x3AE37EFF)),
                  ),
                  child: Text('GitHub', style: TextStyle(fontSize: 17)),
                ),
              ],
            ),
          ),
        ),
      );
    } else {
      return Card(
        elevation: 4,
        child: Container(
          padding: const EdgeInsets.all(8.0),
          width: 350,
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(20)),
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              children: [
                Text(
                  projectData['name'][i],
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 8),

                Row(
                  children: [
                    for (int j = 0; j < projectData['lang'][i].length; j++)
                      Padding(
                        padding: const EdgeInsets.all(3.0),
                        child: SizedBox(
                          height: 28,
                          child: Container(
                            decoration: BoxDecoration(
                              border: Border.all(
                                color: Colors.white,
                                width: 1.0,
                              ),
                              borderRadius: BorderRadius.circular(10.0),
                            ),
                            padding: const EdgeInsets.all(5.0),
                            child: Text(
                              projectData['lang'][i][j],
                              style: TextStyle(fontSize: 10),
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
                SizedBox(height: 8),
                Text(
                  projectData['description'][i],
                  style: TextStyle(fontSize: 15),
                ),
                SizedBox(height: 8),
                OutlinedButton(
                  onPressed: () {
                    _launchUrl1(projectData['button'][i]);
                  },

                  style: ButtonStyle(
                    backgroundColor: WidgetStatePropertyAll(Color(0x3AE37EFF)),
                  ),
                  child: Text('GitHub', style: TextStyle(fontSize: 15)),
                ),
              ],
            ),
          ),
        ),
      );
    }
  }
}
