import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:portfolio/projects_box.dart';
import 'package:url_launcher/url_launcher.dart';

import 'addition_content.dart';
import 'lang_box.dart';

int mode = 1;
final Map<String, dynamic> lang = {
  "name": [
    'python',
    'java',
    'flutter',
    'dart',
    'html',
    'javascript',
    'Database',
    'Git',
    'Github',
    'C',
  ],
  "icon": [
    FontAwesomeIcons.python,
    FontAwesomeIcons.java,
    FontAwesomeIcons.flutter,
    FontAwesomeIcons.dartLang,
    FontAwesomeIcons.html5,
    FontAwesomeIcons.js,
    FontAwesomeIcons.database,
    FontAwesomeIcons.git,
    FontAwesomeIcons.github,
    FontAwesomeIcons.c,
  ],
};
final Map<String, dynamic> addOnsData = {
  "Icon": [Icons.school, Icons.email, Icons.call, Icons.location_on],
  "title": ['Education', 'Email', 'Phone No', 'Location'],
  "specs": [
    'bsc(CS) Graduate',
    'mauryamj32@gmail.com',
    '7387740036',
    'Pune, Maharashtra',
  ],
};

class PortfolioScreen extends StatefulWidget {
  const PortfolioScreen({super.key});

  @override
  State<PortfolioScreen> createState() => _PortfolioScreenState();
}

class _PortfolioScreenState extends State<PortfolioScreen> {
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _messageController = TextEditingController();

  Future<void> _sendEmail() async {
    final String name = _nameController.text;
    final String email = _emailController.text;
    final String phone = _phoneController.text;
    final String message = _messageController.text;

    final Uri emailLaunchUri = Uri(
      scheme: 'mailto',
      path: 'mauryamj32@gmail.com', // Replace with your recipient email
      queryParameters: {
        'subject': 'New Contact Form Submission from $name',
        'body':
            'Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message',
      },
    );

    try {
      await launchUrl(emailLaunchUri);
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text(
            'Could not launch email app. Please check your email client.',
          ),
        ),
      );
    }
  }

  @override
  void dispose() {
    _nameController.dispose();
    _emailController.dispose();
    _phoneController.dispose();
    _messageController.dispose();
    super.dispose();
  }

  Future<void> _launchUrl(String urlString) async {
    final Uri url = Uri.parse(urlString);
    if (!await launchUrl(url)) {}
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            floating: true,
            title: const Text(' </> My Portfolio'),
            // Other app bar properties like actions, etc.
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate((context, index) {
              return SingleChildScrollView(
                scrollDirection: Axis.vertical,
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(
                            width: double.infinity,
                            child: Card(
                              elevation: 10,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(16),
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: LayoutBuilder(
                                  builder:
                                      (
                                        BuildContext context,
                                        BoxConstraints constraints,
                                      ) {
                                        if (constraints.maxWidth > 600) {
                                          return Row(
                                            children: [
                                              Column(
                                                children: [
                                                  Text(
                                                    'Abhishek Maurya',
                                                    style: const TextStyle(
                                                      fontWeight:
                                                          FontWeight.bold,
                                                      fontSize: 32,
                                                    ),
                                                  ),
                                                  CircleAvatar(
                                                    radius: 70,
                                                    backgroundImage: AssetImage(
                                                      'assets/img.png',
                                                    ),
                                                  ),
                                                  Text(
                                                    'Entry Level Developer',
                                                    style: const TextStyle(
                                                      fontSize: 25,
                                                    ),
                                                  ),
                                                ],
                                              ),
                                              SizedBox(width: 10),
                                              Center(
                                                child: Column(
                                                  children: [
                                                    SizedBox(
                                                      width: 690,
                                                      child: Column(
                                                        children: [
                                                          Text(
                                                            '''Flutter, React Native & Web Developer passionate about building responsive, user-focused apps and websites using modern UI practices and clean architecture. Currently expanding my skills through certifications and real-world projects with a focus on scalable, maintainable code.''',
                                                            style: TextStyle(
                                                              fontSize: 15,
                                                            ),
                                                          ),
                                                          SizedBox(height: 30),
                                                          Row(
                                                            children: [
                                                              SizedBox(
                                                                width: 10,
                                                              ),
                                                              IconButton(
                                                                onPressed: () {
                                                                  _launchUrl(
                                                                    'https://github.com/mauryamj',
                                                                  );
                                                                },
                                                                icon: Icon(
                                                                  FontAwesomeIcons
                                                                      .github,
                                                                  size: 25,
                                                                ),
                                                              ),
                                                              SizedBox(
                                                                width: 10,
                                                              ),
                                                              IconButton(
                                                                onPressed: () {
                                                                  _launchUrl(
                                                                    'https://www.instagram.com/mauryamj_?igsh=ZWhuMjU3dnNhOGVk',
                                                                  );
                                                                },
                                                                icon: Icon(
                                                                  FontAwesomeIcons
                                                                      .instagram,
                                                                  size: 25,
                                                                ),
                                                              ),
                                                              SizedBox(
                                                                width: 10,
                                                              ),
                                                              IconButton(
                                                                onPressed: () {
                                                                  _launchUrl(
                                                                    'https://wa.me/qr/CMXCUU4ZL5OON1',
                                                                  );
                                                                },
                                                                icon: Icon(
                                                                  FontAwesomeIcons
                                                                      .whatsapp,
                                                                  size: 25,
                                                                ),
                                                              ),
                                                              SizedBox(
                                                                width: 10,
                                                              ),
                                                              IconButton(
                                                                onPressed: () {
                                                                  _launchUrl(
                                                                    'https://www.linkedin.com/in/abhishek-maurya-84588b237/',
                                                                  );
                                                                },
                                                                icon: Icon(
                                                                  FontAwesomeIcons
                                                                      .linkedin,
                                                                  size: 25,
                                                                ),
                                                              ),
                                                            ],
                                                          ),
                                                        ],
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                              ),
                                            ],
                                          );
                                        } else {
                                          return Column(
                                            children: [
                                              Text(
                                                'Abhishek Maurya',
                                                style: const TextStyle(
                                                  fontWeight: FontWeight.bold,
                                                  fontSize: 32,
                                                ),
                                              ),
                                              CircleAvatar(
                                                radius: 70,
                                                backgroundImage: AssetImage(
                                                  'assets/img.png',
                                                ),
                                              ),
                                              Text(
                                                'Entry Level Developer',
                                                style: const TextStyle(
                                                  fontSize: 25,
                                                ),
                                              ),
                                              SizedBox(height: 15),
                                              Center(
                                                child: Column(
                                                  children: [
                                                    Text(
                                                      '''Flutter, React Native & Web Developer passionate about building responsive, user-focused apps and websites using modern UI practices and clean architecture. Currently expanding my skills through certifications and real-world projects with a focus on scalable, maintainable code.''',
                                                      style: TextStyle(
                                                        fontSize: 15,
                                                      ),
                                                    ),
                                                    SizedBox(height: 30),
                                                    Row(
                                                      children: [
                                                        SizedBox(width: 10),
                                                        IconButton(
                                                          onPressed: () {
                                                            _launchUrl(
                                                              'https://github.com/mauryamj',
                                                            );
                                                          },
                                                          icon: Icon(
                                                            FontAwesomeIcons
                                                                .github,
                                                            size: 25,
                                                          ),
                                                        ),
                                                        SizedBox(width: 10),
                                                        IconButton(
                                                          onPressed: () {
                                                            _launchUrl(
                                                              'https://www.instagram.com/mauryamj_?igsh=ZWhuMjU3dnNhOGVk',
                                                            );
                                                          },
                                                          icon: Icon(
                                                            FontAwesomeIcons
                                                                .instagram,
                                                            size: 25,
                                                          ),
                                                        ),
                                                        SizedBox(width: 10),
                                                        IconButton(
                                                          onPressed: () {
                                                            _launchUrl(
                                                              'https://wa.me/qr/CMXCUU4ZL5OON1',
                                                            );
                                                          },
                                                          icon: Icon(
                                                            FontAwesomeIcons
                                                                .whatsapp,
                                                            size: 25,
                                                          ),
                                                        ),
                                                        SizedBox(width: 10),
                                                        IconButton(
                                                          onPressed: () {
                                                            _launchUrl(
                                                              'https://www.linkedin.com/in/abhishek-maurya-84588b237/',
                                                            );
                                                          },
                                                          icon: Icon(
                                                            FontAwesomeIcons
                                                                .linkedin,
                                                            size: 25,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                  ],
                                                ),
                                              ),
                                            ],
                                          );
                                        }
                                      },
                                ),
                              ),
                            ),
                          ),
                          const SizedBox(height: 20),
                          Text(
                            "Languages",
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 24,
                            ),
                          ),
                          const SizedBox(height: 16),
                          SingleChildScrollView(
                            scrollDirection: Axis.horizontal,
                            child: Row(
                              children: [
                                for (int i = 0; i < lang['icon'].length; i++)
                                  LangBox(
                                    icon: lang['icon'][i],
                                    name: lang['name'][i],
                                  ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 20),
                          Text(
                            "Projects",
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 24,
                            ),
                          ),
                          const SizedBox(height: 16),
                          LayoutBuilder(
                            builder:
                                (
                                  BuildContext context,
                                  BoxConstraints constraints,
                                ) {
                                  if (constraints.maxWidth > 600) {
                                    return SingleChildScrollView(
                                      scrollDirection: Axis.horizontal,
                                      child: Row(
                                        children: [
                                          for (
                                            int i = 0;
                                            i < projectData['name'].length;
                                            i++
                                          )
                                            ProjectBox(i: i, type: 1),
                                        ],
                                      ),
                                    );
                                  } else {
                                    return SingleChildScrollView(
                                      scrollDirection: Axis.horizontal,
                                      child: Row(
                                        children: [
                                          for (
                                            int i = 0;
                                            i < projectData['name'].length;
                                            i++
                                          )
                                            ProjectBox(i: i, type: 2),
                                        ],
                                      ),
                                    );
                                  }
                                },
                          ),
                          const SizedBox(height: 20),

                          //others card
                          Text(
                            " Additional Info",
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 24,
                            ),
                          ),
                          SingleChildScrollView(
                            scrollDirection: Axis.horizontal,
                            child: Row(
                              children: [
                                for (
                                  int i = 0;
                                  i < addOnsData['Icon'].length;
                                  i++
                                )
                                  AddOns(
                                    icon: addOnsData['Icon'][i],
                                    label: addOnsData['title'][i],
                                    value: addOnsData['specs'][i],
                                  ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 20),
                          Center(
                            child: SizedBox(
                              width: 500,
                              child: Card(
                                elevation: 10,
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(16),
                                ),
                                child: Padding(
                                  padding: const EdgeInsets.all(8.0),
                                  child: Column(
                                    children: [

                                      Text(
                                        "Contact me",
                                        style: TextStyle(
                                          fontSize: 30,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                      Padding(
                                        padding: const EdgeInsets.all(10.0),
                                        child: TextField(
                                          decoration: InputDecoration(
                                            border: OutlineInputBorder(
                                              borderRadius: BorderRadius.all(
                                                Radius.circular(20),
                                              ),
                                            ),

                                            hintText: 'Name',
                                          ),
                                        ),
                                      ),
                                      Padding(
                                        padding: const EdgeInsets.all(10.0),
                                        child: TextField(
                                          decoration: InputDecoration(
                                            border: OutlineInputBorder(
                                              borderRadius: BorderRadius.all(
                                                Radius.circular(20),
                                              ),
                                            ),

                                            hintText: 'Email',
                                          ),
                                        ),
                                      ),
                                      Padding(
                                        padding: const EdgeInsets.all(10.0),
                                        child: TextField(
                                          decoration: InputDecoration(
                                            border: OutlineInputBorder(
                                              borderRadius: BorderRadius.all(
                                                Radius.circular(20),
                                              ),
                                            ),

                                            hintText: 'Phone no.',
                                          ),
                                        ),
                                      ),
                                      Padding(
                                        padding: const EdgeInsets.all(10.0),
                                        child: TextField(
                                          decoration: InputDecoration(
                                            border: OutlineInputBorder(
                                              borderRadius: BorderRadius.all(
                                                Radius.circular(20),
                                              ),
                                            ),

                                            hintText: 'message',
                                          ),
                                          maxLines: 5,
                                        ),
                                      ),
                                      Padding(
                                        padding: const EdgeInsets.all(10.0),
                                        child: SizedBox(
                                          width: double.infinity,
                                          child: OutlinedButton(
                                            onPressed: _sendEmail,
                                            style: ButtonStyle(
                                              backgroundColor:
                                                  WidgetStatePropertyAll(
                                                    Color(0x3AE37EFF),
                                                  ),
                                            ),
                                            child: Text('Send Message'),
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    Container(
                      height: 40,
                      width: double.infinity,
                      color: Colors.black,
                      child: Align(
                        alignment: Alignment.centerLeft,
                        child: Text(
                          '© 2025 Created by Abhishek Maurya. All rights reserved.',
                        ),
                      ),
                    ),
                  ],
                ),
              );
            }, childCount: 1),
          ),
        ],
      ),
    );
  }
}
